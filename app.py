from flask import Flask, render_template, request
from subprocess import call

app = Flask('__name__')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/openretroarch', methods=['POST'])
def sendmsg():
    if request.method == 'POST':
        # input = request.form['input']
        print("Opening Retroarch")
        call('export DISPLAY=:0 && flatpak run org.libretro.RetroArch --fullscreen', shell=True)
        return 'success'

if __name__ == '__main__':
    # ! Remove debug = True after development
    app.run(debug=True, host='0.0.0.0')
