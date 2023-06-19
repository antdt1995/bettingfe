import { Route, Routes } from "react-router-dom";
import { BookList } from "./components/pages/BookList";
import { Book } from "./components/pages/Book";
import { NewBook } from "./components/pages/NewBook";
import { BookLayout } from "./BookLayout";

export function BookRoute() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
