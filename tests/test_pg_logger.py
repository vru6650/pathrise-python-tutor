import sys
from pathlib import Path
import unittest

V5_UNITY_DIR = Path(__file__).resolve().parents[1] / "v5-unity"
if str(V5_UNITY_DIR) not in sys.path:
    sys.path.insert(0, str(V5_UNITY_DIR))

import pg_logger


class ExecScriptAllowAllModulesTests(unittest.TestCase):

    def test_from_import_preimported_when_allow_all_modules_enabled(self):
        script = "from math import sqrt\nresult = sqrt(4)"

        def finalizer(code, trace):
            return {"code": code, "trace": trace}

        result = pg_logger.exec_script_str_local(
            script,
            [],
            cumulative_mode=False,
            heap_primitives=False,
            finalizer_func=finalizer,
            allow_all_modules=True,
        )

        self.assertEqual(result["code"], script)
        trace = result["trace"]
        self.assertGreaterEqual(len(trace), 3)
        self.assertEqual(trace[-1]["event"], "return")
        self.assertEqual(trace[-1]["func_name"], "<module>")
        self.assertSetEqual({entry.get("func_name") for entry in trace}, {"<module>"})


if __name__ == "__main__":  # pragma: no cover
    unittest.main()
