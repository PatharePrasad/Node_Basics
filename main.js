import Cryptr from "cryptr";

const cryptObj = new Cryptr("12345");

const text = "55970231d8f55bba4fcfb19d259c1a87455204625408e75d395eb9c3349bfa10cc1468466784dc5765cb2d20662173c7a7eb352644b3bffb98ae725b117e11a0ab4f5a5130ec28833dd28085ed8f9b3b664e38f190defbe49d8134ad95ddc8f3dacacd6608";

console.log(cryptObj.decrypt(text));