import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";
import { BudgetProvider } from "./context/BudgetsContext";
import AddBudgetModal from "./components/AddBudgetModal";

function App() {
  return (
    <BudgetProvider>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budget</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <BudgetCard
            name="Entertainment"
            gray
            amount={500}
            max={1000}
          ></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal show />
    </BudgetProvider>
  );
}

export default App;
