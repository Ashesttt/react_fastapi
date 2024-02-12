import subprocess

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
    backend_directory = "back-react-fastapi"
    frontend_directory = "react-fastapi"
    run_command(backend_command, backend_directory)
    run_command(frontend_command, frontend_directory)
    print("All commands have been executed successfully")
