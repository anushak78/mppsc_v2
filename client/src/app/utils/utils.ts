// Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
//
// This program and the accompanying materials are made available
// under the terms described in the LICENSE file which accompanies
// this distribution. If the LICENSE file was not attached to this
// distribution or for further clarifications, please contact
// legal@nseit.com.
export class ResponseResult {
  type: string;
  result: any;

  static fromJson(data: any): ResponseResult {
    const r = new ResponseResult();
    r.type = data['type'];
    r.result = data['result'];
    return r;
  }
}
