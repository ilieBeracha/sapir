 React Shop - Task Overview
This is a simple React e-commerce project with routing and basic product listings. It uses Recoil for state management and aims to implement a cart functionality with persistent state and summary calculations.

📁 Current Structure
/views/Shop.tsx: Displays all shop items from items.json.

/views/Cart.tsx: Currently empty, will display items added to the cart.

/components/Header.tsx: Not shown here, but assumed to handle navigation.

/data/items.json: Contains a list of 10 sample products.

✅ Your Task: Implement Cart Functionality with Recoil
📦 1. Set up Recoil
Initialize Recoil in the project by wrapping <App /> with <RecoilRoot> in main.tsx or index.tsx.

🧠 2. Create Recoil Atoms/Selectors
cartState: Atom to store cart items.

cartSummarySelector: Selector that calculates total item count and price.

🛒 3. Add to Cart Functionality
In Shop.tsx, add logic to:

Call a handleAddToCart(item) function.

Update cartState (increment quantity if already in cart).

Sync cartState with localStorage for persistence.

💾 4. Persist with localStorage
On load, read from localStorage and initialize Recoil state.

Use a useEffect hook to save cartState back to localStorage whenever it changes.

🛍️ 5. Cart View
Display all products added to the cart:

Name, quantity, price per unit, total per item.

At the bottom, show:

Total items

Total price

# sapir
