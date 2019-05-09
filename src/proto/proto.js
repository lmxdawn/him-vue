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
      WSBaseReqProto: {
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
      WSBaseResProto: {
        fields: {
          type: {
            type: "int32",
            id: 1
          },
          message: {
            type: "WSMessageResProto",
            id: 2
          },
          user: {
            type: "WSUserResProto",
            id: 3
          },
          createTime: {
            type: "string",
            id: 4
          }
        }
      },
      WSMessageResProto: {
        fields: {
          receiveId: {
            type: "uint64",
            id: 1
          },
          msgType: {
            type: "int32",
            id: 2
          },
          msgContent: {
            type: "string",
            id: 3
          }
        }
      },
      WSUserResProto: {
        fields: {
          uid: {
            type: "uint64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          avatar: {
            type: "string",
            id: 3
          },
          remark: {
            type: "string",
            id: 4
          }
        }
      }
    }
  }
});

export default $root;
