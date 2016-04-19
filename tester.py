import unittest

if __name__ == '__main__':
    testsuite = unittest.TestLoader().discover('server/tests', \
        pattern = "*_spec.py")
    unittest.TextTestRunner(verbosity=1).run(testsuite)