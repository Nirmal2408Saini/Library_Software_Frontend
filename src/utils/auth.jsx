const USERS_KEY = "acl_users_v1";
const CURRENT_KEY = "acl_current_user";

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser({
  fullName,
  email,
  phone,
  rollNumber,
  department,
  password,
  role = "user",
}) {
  const users = loadUsers();
  if (users.find((u) => u.email === email)) {
    throw new Error("Email already registered");
  }
  const newUser = {
    id: Date.now(),
    fullName,
    email,
    phone,
    rollNumber,
    department,
    password,
    role,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveUsers(users);
  // auto-login
  localStorage.setItem(
    CURRENT_KEY,
    JSON.stringify({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
      fullName: newUser.fullName,
    })
  );
  return newUser;
}

export function login({ email, password }) {
  const users = loadUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");
  localStorage.setItem(
    CURRENT_KEY,
    JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role,
      fullName: user.fullName,
    })
  );
  return user;
}

export function logout() {
  localStorage.removeItem(CURRENT_KEY);
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_KEY));
  } catch {
    return null;
  }
}

export function seedAdmin() {
  const users = loadUsers();
  if (!users.find((u) => u.role === "admin")) {
    users.push({
      id: 1,
      fullName: "Library Admin",
      email: "admin@andaman.edu",
      password: "admin123",
      phone: "-",
      rollNumber: "-",
      department: "Library",
      role: "admin",
      createdAt: new Date().toISOString(),
    });
    saveUsers(users);
  }
}
