rm -rf dist
bun install
bun run build

tar -czvf dist.tar.gz dist 

scp ./dist.tar.gz gududuHK:/root/www/e-commerce/admin &&
rm -rf dist.tar.gz &&

ssh gududuHK sudo rm -rf /root/www/e-commerce/admin/dist &&
ssh gududuHK tar -xzvf /root/www/e-commerce/admin/dist.tar.gz -C /root/www/e-commerce/admin && 
ssh gududuHK sudo rm -rf /root/www/e-commerce/admin/dist.tar.gz