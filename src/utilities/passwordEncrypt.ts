const passwordEncrypt = async (plaintextPassword: string) => {
  const msgUint8 = new TextEncoder().encode(plaintextPassword); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the password
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hexString = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
    console.log(hexString);
  return hexString;
}

export default passwordEncrypt;
