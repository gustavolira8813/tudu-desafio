import { AuthProvider } from "./Auth";
import { TaskProvider } from "./Task";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <UserProvider>{children}</UserProvider>
        </TaskProvider>
      </AuthProvider>
    </>
  );
};
export default Providers;
