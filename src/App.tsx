import { createContext, useContext } from "react";

const ThemeContext = createContext("");

interface props {
  title?: string;
  children?: React.ReactNode;
}

export default function MyApp() {
  return (
    <ThemeContext.Provider value="neutral-700">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign Up</Button>
      <Button>Log In</Button>
    </Panel>
  );
}

function Panel({ title, children }: props) {
  const theme = useContext(ThemeContext);
  const className = "text-" + theme;
  console.log(theme);

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }: props) {
  const theme = useContext(ThemeContext);
  const className = "text-" + theme;
  console.log(theme);
  return <button className={className}>{children}</button>;
}
