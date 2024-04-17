import joblib
import os

# Test joblib functions
try:
    # Create a sample dictionary
    sample_dict = {'a': 1, 'b': 2, 'c': 3}

    # Save the sample dictionary to a file
    joblib.dump(sample_dict, 'sample_dict.joblib')

    # Load the saved dictionary from the file
    loaded_dict = joblib.load('sample_dict.joblib')

    # Print the loaded dictionary
    print("Loaded dictionary:", loaded_dict)

    # Delete the temporary file
    os.remove('sample_dict.joblib')

    print("joblib test successful.")
except Exception as e:
    print("joblib test failed:", e)
