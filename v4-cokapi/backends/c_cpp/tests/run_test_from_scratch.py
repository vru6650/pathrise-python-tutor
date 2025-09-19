import os
import subprocess
import sys

input_path = os.path.abspath(sys.argv[1])
bn = os.path.splitext(input_path)[0]
trace_f = bn + '.trace'
trace_dir = os.path.dirname(trace_f)
target_name = os.path.basename(trace_f)

if os.path.exists(trace_f):
    os.remove(trace_f)

make_args = ["make", target_name]
subprocess.check_call(make_args, cwd=trace_dir or None)  # synchronous
if not os.path.exists(trace_f):
    raise AssertionError(trace_f + " was not created")

# print out trace_f to stdout
with open(trace_f) as inf:
    for line in inf:
        sys.stdout.write(line)

#os.remove(trace_f) # clean up
