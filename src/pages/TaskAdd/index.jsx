import TaskForm from "../../components/TaskForm";
import { Dialog } from "@mui/material";
import { useTasks } from "../../providers/Task";
import { motion } from "framer-motion";
const TaskAdd = () => {
  const { insertModal, handleClickCloseModal } = useTasks();
  return (
    <div>
      <Dialog open={insertModal} onClose={handleClickCloseModal}>
        <motion.div
          initial={{ translateY: 500 }}
          animate={{ translateY: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <TaskForm handleClickCloseModal={handleClickCloseModal} />
        </motion.div>
      </Dialog>
    </div>
  );
};

export default TaskAdd;
