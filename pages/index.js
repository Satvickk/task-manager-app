
// import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import Tiles from "../components/Tiles";
import { Store } from "../redux/store";
import { Provider } from "react-redux";


export default function Home({tasks}) {
  return (
    <Provider store={Store}>
    <div className="min-h-screen sm:pb-20 mx-auto max-w-6xl text-black">
      <main className="grid py-4 px-4 gap-8">
        <p className="text-center sm:text-start text-3xl sm:text-lg font-bold border-b-2 py-4">
          📃 Task Manager
        </p>

        <div className="w-full">
          <Tiles />
        </div>

        <div className="grid gap-2">
          <Navbar />

          <div className="w-full">
            <Tasks serverData={tasks}/>
          </div>
        </div>
      </main>
    </div>
  </Provider>
  );
}

export async function getServerSideProps() {
  const tasks = [
    {
      id: 1,
      title: "Design Homepage Layout",
      description:
        "Create a responsive layout for the homepage with a focus on UX design.",
      priority: 1,
      isCompleted: false,
    },
    {
      id: 2,
      title: "Fix Login Issue",
      description:
        "Resolve the bug where users are unable to log in with their credentials.",
      priority: 2,
      isCompleted: false,
    },
    {
      id: 3,
      title: "Write Unit Tests for User Module",
      description:
        "Write unit tests to cover all core functionalities in the user module.",
      priority: 3,
      isCompleted: true,
    },
    {
      id: 4,
      title: "Implement Payment Gateway",
      description:
        "Integrate Stripe payment gateway for subscription services.",
      priority: 1,
      isCompleted: true,
    },
    {
      id: 5,
      title: "Update Product Descriptions",
      description:
        "Revise product descriptions in the database to reflect the new offerings.",
      priority: 3,
      isCompleted: true,
    },
    {
      id: 6,
      title: "Refactor Dashboard Component",
      description:
        "Refactor the dashboard code for better readability and performance.",
      priority: 2,
      isCompleted: false,
    },
    {
      id: 7,
      title: "Set Up Email Notifications",
      description:
        "Configure and deploy email notification service for customer updates.",
      priority: 1,
      isCompleted: false,
    },
    {
      id: 8,
      title: "Optimize Database Queries",
      description:
        "Improve query performance in the reporting module to speed up data retrieval.",
      priority: 2,
      isCompleted: false,
    },
    {
      id: 9,
      title: "Prepare Marketing Campaign",
      description:
        "Collaborate with the marketing team to create materials for the new product launch.",
      priority: 3,
      isCompleted: false,
    },
    {
      id: 10,
      title: "Implement Dark Mode",
      description:
        "Add a dark mode option to the application for improved accessibility.",
      priority: 2,
      isCompleted: false,
    },
  ];

  return { props: { tasks } };
}
