import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClientJs from './bootstrapJs/bootstrapJs';
//import "./globals.css";

export const metadata = {
  title: "Podcast App",
  description: "Podcast App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <BootstrapClientJs />
    </html>
  );
}
