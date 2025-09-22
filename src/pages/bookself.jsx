import React, { useState, useMemo } from "react";
import "./library.css"; // custom CSS file

const SAMPLE_BOOKS = [
  {
    id: 1,
    title: "Tides of Andaman",
    author: "R. Sen",
    category: "Novels",
    cover: "https://via.placeholder.com/220x300?text=Tides+of+Andaman",
    available: true,
    description: "A novel exploring island life, culture and discovery.",
  },
  {
    id: 2,
    title: "Operating Systems - 3rd Ed.",
    author: "A. Tan",
    category: "Textbooks",
    cover: "https://via.placeholder.com/220x300?text=Operating+Systems",
    available: false,
    description: "Comprehensive textbook on OS concepts with exercises.",
  },
  {
    id: 3,
    title: "Marine Biology of Indian Oceans",
    author: "S. Iyer",
    category: "Journals",
    cover: "https://via.placeholder.com/220x300?text=Marine+Biology",
    available: true,
    description: "Selected research papers on marine ecosystems.",
  },
  {
    id: 4,
    title: "Data Science for Everyone",
    author: "L. Gupta",
    category: "Textbooks",
    cover: "https://via.placeholder.com/220x300?text=Data+Science",
    available: true,
    description: "An approachable introduction to data science principles.",
  },
  {
    id: 5,
    title: "Island Flora",
    author: "T. Ramesh",
    category: "Magazines",
    cover: "https://via.placeholder.com/220x300?text=Island+Flora",
    available: false,
    description: "Magazine focusing on native plant species.",
  },
  {
    id: 6,
    title: "Research Methods",
    author: "N. Rao",
    category: "Research Papers",
    cover: "https://via.placeholder.com/220x300?text=Research+Methods",
    available: true,
    description: "A practical guide for preparing research projects.",
  },
];

const CATEGORIES = [
  "All",
  "Novels",
  "Textbooks",
  "Journals",
  "Research Papers",
  "Magazines",
];

function Badge({ children, color = "blue" }) {
  return <span className={`badge ${color}`}>{children}</span>;
}

function BookCard({ book, onOpen }) {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={book.cover} alt={book.title} />
      </div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div className="status">
        {book.available ? (
          <Badge color="green">Available</Badge>
        ) : (
          <Badge color="red">Borrowed</Badge>
        )}
      </div>
      <button onClick={() => onOpen(book)} className="details-btn">
        Details
      </button>
    </div>
  );
}

export default function AndamanCollegeLibrary() {
  const [books] = useState(SAMPLE_BOOKS);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const filtered = useMemo(() => {
    return books.filter((b) => {
      if (category !== "All" && b.category !== category) return false;
      if (showOnlyAvailable && !b.available) return false;
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
      );
    });
  }, [books, category, showOnlyAvailable, query]);

  return (
    <div className="library-container">
      <header className="header">
        <div className="logo">
          Andaman College <span>Library Catalog</span>
        </div>
        <nav>
          <a>Home</a>
          <a>Catalog</a>
          <a>Events</a>
          <a>About</a>
          <a>Contact</a>
          <button onClick={() => setIsAdmin((s) => !s)}>
            {isAdmin ? "Librarian" : "Student"}
          </button>
        </nav>
      </header>

      <main className="main-content">
        <aside className="sidebar">
          <h4>Filter by</h4>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, author..."
          />

          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <label>
            <input
              type="checkbox"
              checked={showOnlyAvailable}
              onChange={(e) => setShowOnlyAvailable(e.target.checked)}
            />
            Show only available
          </label>

          {isAdmin && (
            <div className="admin-tools">
              <h5>Librarian Tools</h5>
              <button>Add Book</button>
              <button>Manage Loans</button>
            </div>
          )}
        </aside>

        <section className="book-list">
          <h2>All Books ({filtered.length})</h2>
          <div className="grid">
            {filtered.map((b) => (
              <BookCard key={b.id} book={b} onOpen={setSelectedBook} />
            ))}
          </div>
          {filtered.length === 0 && <div>No books match your search.</div>}
        </section>
      </main>

      <footer className="footer">© Andaman College Library</footer>

      {selectedBook && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setSelectedBook(null)} className="close">
              ✕
            </button>
            <div className="modal-body">
              <img src={selectedBook.cover} alt={selectedBook.title} />
              <div>
                <h3>{selectedBook.title}</h3>
                <p>
                  {selectedBook.author} • {selectedBook.category}
                </p>
                <p>{selectedBook.description}</p>
                {selectedBook.available ? (
                  <button className="borrow-btn">Borrow</button>
                ) : (
                  <button disabled>Unavailable</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- library.css ----------------
.library-container { font-family: Arial, sans-serif; background: #f8f9fa; min-height: 100vh; }
.header { display: flex; justify-content: space-between; padding: 15px 30px; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
.header .logo { font-size: 20px; font-weight: bold; color: #003366; }
.header nav a { margin: 0 10px; text-decoration: none; color: #555; font-size: 14px; }
.header nav button { margin-left: 15px; padding: 5px 10px; border: 1px solid #003366; background: none; cursor: pointer; }

.main-content { display: grid; grid-template-columns: 250px 1fr; padding: 20px; gap: 20px; }
.sidebar { background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.1); }
.sidebar input, .sidebar select { width: 100%; padding: 8px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; }
.sidebar .admin-tools { margin-top: 20px; }
.sidebar .admin-tools button { margin-right: 5px; padding: 5px 10px; border: 1px solid #333; background: #eee; cursor: pointer; }

.book-list h2 { margin-bottom: 15px; }
.book-list .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px; }
.book-card { background: #fff; border-radius: 8px; padding: 15px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.book-card img { width: 100%; height: 220px; object-fit: cover; border-radius: 4px; }
.book-card h3 { font-size: 14px; margin: 10px 0 5px; }
.book-card p { font-size: 12px; color: #666; }
.book-card .status { margin: 8px 0; }
.badge { padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: bold; }
.badge.green { background: #d4edda; color: #155724; }
.badge.red { background: #f8d7da; color: #721c24; }
.details-btn { border: 1px solid #003366; padding: 5px 10px; font-size: 12px; cursor: pointer; border-radius: 4px; margin-top: 5px; }

.footer { text-align: center; padding: 15px; background: #fff; margin-top: 20px; font-size: 13px; color: #555; box-shadow: 0 -2px 5px rgba(0,0,0,0.05); }

.modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; }
.modal-content { background: #fff; padding: 20px; border-radius: 8px; width: 600px; max-width: 90%; position: relative; }
.close { position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 20px; cursor: pointer; }
.modal-body { display: flex; gap: 20px; }
.modal-body img { width: 200px; height: 300px; object-fit: cover; border-radius: 4px; }
.borrow-btn { padding: 8px 15px; background: #003366; color: #fff; border: none; cursor: pointer; border-radius: 4px; margin*/
