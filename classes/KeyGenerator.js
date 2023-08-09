import crypto from "crypto";

export default class KeyGenerator {
   generateKey() {
      return crypto.randomBytes(32).toString("hex");
   }

   createHMAC(key, message) {
      const hmac = crypto.createHmac("sha256", key);
      hmac.update(message);
      return hmac.digest("hex");
   }
}
