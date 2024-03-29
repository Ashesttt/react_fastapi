import subprocess
import threading


def run_command(command, working_directory):
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, cwd=working_directory)
    while True:
        output = process.stdout.readline()
        if output == '' and process.poll() is not None:
            break
        if output:
            print(output.strip())
    return process.poll()


if __name__ == '__main__':
    backend_command = "uvicorn main:app --reload"
    frontend_command = "npm start"
    backend_directory = "react-fastapi"
    frontend_directory = "react-fastapi"

    backend_thread = threading.Thread(target=run_command, args=(backend_command, backend_directory))
    frontend_thread = threading.Thread(target=run_command, args=(frontend_command, frontend_directory))

    backend_thread.start()
    print("backend started")
    frontend_thread.start()
    print("frontend started")

    backend_thread.join()
    frontend_thread.join()
