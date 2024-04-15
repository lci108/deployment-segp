import joblib
import os

def load_model(model_path):
    try:
        model = joblib.load(model_path)
        print(f"Model loaded successfully from {model_path}")
        # Optionally, you can add more checks here to verify the model
        return model
    except Exception as e:
        print(f"Failed to load model from {model_path}")
        print(f"Error: {e}")

if __name__ == "__main__":
    dir_path = os.path.dirname(os.path.realpath(__file__))
    pn_model_path = os.path.join(dir_path, '../models/model_sev.sav')

    # Attempt to load the model
    load_model(pn_model_path)
