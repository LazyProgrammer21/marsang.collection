import { Routes, Route } from "react-router-dom";

import FrontPage from "./FrontPage";
import MessageView from "./MessageView";

const Router = () => (
  <Routes>
    <Route path="/" element={<FrontPage />} />
    <Route path="/messages" element={<MessageView />} />
  </Routes>
);

export default Router;
