from fabric.api import *
env.key_filename = '~/.ssh/id_rsa'
env.use_ssh_config = True

REMOTE_DIR = '/var/www'


@task
@hosts('shuosc')
def deploy():
    with lcd('..'):
        local('npm run build')
    with lcd('../dist'):
        local('zip -r tv.zip ./*')
        put('tv.zip', '{}/tv.zip'.format(REMOTE_DIR))
        local('rm tv.zip')
    with cd(REMOTE_DIR):
        run('rm -rf tv/* && unzip -o tv.zip -d tv')
        run('rm tv.zip')
