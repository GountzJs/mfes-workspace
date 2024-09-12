import inquirer from "inquirer";
import { exec } from "node:child_process";

const apps = ["host-app", "product-app", "user-app", "cart-app"];

function runApp(name) {
  return new Promise((resolve, reject) => {
    const app = exec(`nx serve ${name}`);
    app.stdout.pipe(process.stdout);
    app.stderr.pipe(process.stderr);
    app.on("close", () => resolve());
    app.on("error", (err) => reject(err));
  });
}

async function main() {
  try {
    const { app } = await inquirer.prompt([
      {
        type: "list",
        name: "app",
        message: "Seleccione la aplicación a iniciar:",
        choices: apps,
      },
    ]);
    await runApp(app);
  } catch {
    console.error("💔 No pudimos inicializar la aplicación");
  }
}

main();
