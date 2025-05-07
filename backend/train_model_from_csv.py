import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# load csv
df = pd.read_csv("house_prices_dataset.csv")

# feature and target split
X = df[['size_sqft']]
y = df['price_lakhs']

# train model
model = LinearRegression()
model.fit(X,y)

# save trained model
joblib.dump(model, 'model.pkl')

print("Model trained and model.pkl file will be created")