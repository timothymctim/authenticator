function base32_decode(message) {
	var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=';
	var workingByte = bitsRemaining = 0;
	var hexString = '';

	// Normalize
	message = message.trim().replace(/ /g, '').replace(/-/g, '');
	message = message.toUpperCase();
	message = message.replace(/1/g, 'L').replace(/8/g, 'B').replace(/0/g, 'O');

	// Convert into a hex string
	for (var i=0, character; character = message[i]; i++) {
		var bits = alphabet.indexOf(character);
		if (bits === -1) {
			throw "Unknown character '" + character + "'";
		} else if (bits === 32) {
			// Just break out of the loop; do not care if the message
			// contains not enough padding characters or if the =-sign
			// occurs in the middle of the message.
			break;
		}

		if (bitsRemaining == 0) {
			workingByte = bits;
		} else if (bitsRemaining <= 5) {
			// Make room for the incoming bits
			workingByte <<= bitsRemaining;

			var shift = 5 - bitsRemaining;

			// Complete the byte
			workingByte |= bits >> shift;

			// Convert the byte to a two character hexadecimal number
			hex = workingByte.toString(16);
			hexString += hex.length < 2 ? '0' + hex : hex;

			// Insert the remaining bits in the byte
			workingByte = bits & ((1 << shift) - 1);
		} else {
			// Make room for the incoming bits
			workingByte <<= 5;

			// Store the incoming bits
			workingByte |= bits;
		}

		// Update the number of bit remaining in the byte
		bitsRemaining = ((bitsRemaining - 5) % 8 + 8) % 8;
	}

	return hexString;
}

function hotp(key, counter, codeDigits=6, hash='SHA-1') {
	var digest = new jsSHA(counter, 'HEX');
	var hmac = digest.getHMAC(key, 'HEX', hash, 'HEX');

	// Dynamic Truncation
	var offset = parseInt(hmac[hmac.length - 1], 16) * 2;
	var binaryCodeHexStr = '';
	for (var i = 0; i < 8; i++) binaryCodeHexStr += hmac[offset + i];
	var binaryCode = parseInt(binaryCodeHexStr, 16) & 0x7fffffff;

	// HOTP value
	var token = (binaryCode % Number('1e' + codeDigits)) + '';
	while (token.length < codeDigits) token = '0' + token;

	return token;
}

function totp(key, unixTime, timeStep=30, hash='SHA-1', codeDigits=6, offset=0) {
	// Calculate the counter value as an integer.
	var movingFactor = ~~((unixTime - offset) / timeStep);
	movingFactor = movingFactor.toString(16);
	while (movingFactor.length < 16) movingFactor = '0' + movingFactor;

	return hotp(key, movingFactor, codeDigits, hash);
}
