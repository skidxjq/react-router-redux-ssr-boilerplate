echo "production start"
node ./mock-server/app &
NODE_ENV=production node ./bin/www