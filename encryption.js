// <script src="https://cdn.jsdelivr.net/npm/openpgp@4.3.0/dist/openpgp.min.js"></script>
(async function () {
	const cleartext = 'location.href = "./mikael_samvelian_resume_2022.pdf"';
	const msg = openpgp.message.fromText(cleartext);
	const ciphertext = await openpgp.encrypt({
		message: msg,
		passwords: ['cool-beans'],
		armor: true,
	});
	// you'd be better saving as a text file though,
	// ecnoding and new line characters matter
	console.log(ciphertext.data);
})().catch(console.error);
