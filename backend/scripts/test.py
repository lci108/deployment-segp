import joblib
import os

# Get the directory of the current script
dir_path = os.path.dirname(os.path.realpath(__file__))

# Define the paths to your model files (using relative paths)
model_pn_path = os.path.join(dir_path, 'models', 'model_pn.sav')
model_sev_path = os.path.join(dir_path, 'models', 'model_sev.sav')

# Load and inspect the model PN
try:
    with open(model_pn_path, 'rb') as file:
        model_pn = joblib.load(file)
    print("Model PN loaded successfully:")
    print(model_pn)
except Exception as e:
    print(f"Failed to load model PN from {model_pn_path}")
    print(f"Error: {e}")

# Load and inspect the model SEV
try:
    with open(model_sev_path, 'rb') as file:
        model_sev = joblib.load(file)
    print("Model SEV loaded successfully:")
    print(model_sev)
except Exception as e:
    print(f"Failed to load model SEV from {model_sev_path}")
    print(f"Error: {e}")
