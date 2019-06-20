require(`shelljs/global`);
cd('dest');
exec('git checkout master');
exec('git add .');
if(exec('git commit -m "update"').code !==0){
	echo(`Error: Git commit master failed`);
    exit(1);
}
exec('git pull origin master');
if (exec(`git push origin master`).code !== 0) {
	echo(`Error: Git push master failed`);
	exit(1);
}
echo(`------------ master updated`);
cd('..');