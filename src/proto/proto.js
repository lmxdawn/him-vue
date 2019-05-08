/*eslint-disable*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  protocol: {
    options: {
      optimize_for: "SPEED",
      java_package: "com.lmxdawn.him.common.protobuf"
    },
    nested: {
      WSMessageProto: {
        fields: {
          senderId: {
            type: "uint64",
            id: 1
          },
          receiveId: {
            type: "uint64",
            id: 2
          },
          msgType: {
            type: "int32",
            id: 3
          },
          msgContent: {
            type: "string",
            id: 4
          }
        }
      },
      WSMessageReqProto: {
        fields: {
          type: {
            type: "int32",
            id: 1
          },
          uid: {
            type: "uint64",
            id: 2
          },
          sid: {
            type: "string",
            id: 3
          }
        }
      },
      WSMessageResProto: {
        fields: {
          type: {
            type: "int32",
            id: 1
          },
          message: {
            type: "WSMessageProto",
            id: 2
          },
          createTime: {
            type: "string",
            id: 3
          }
        }
      }
    }
  }
});

export default $root;
