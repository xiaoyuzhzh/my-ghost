// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://115.28.53.207',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },

        // 配置MySQL 数据库
        /*database: {
            client: 'mysql',
            connection: {
                host     : 'host',
                user     : 'user',
                password : 'password',
                database : 'database',
                charset  : 'utf8'
            },
            debug: false
        },*/

        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '80'
        },

        //Storage.Now,we can support `qiniu`,`upyun`, `aliyun oss`, `aliyun ace-storage` and `local-file-store`
        storage: {
             provider: 'qiniu',
             bucketname: 'ghostrepo',
             ACCESS_KEY: 'wEiUZbMegk3oH3buCMWxpYTv3PVmbGtX9euHagvL',
             SECRET_KEY: 'EQ3Cj12DoJQhy9qkyZGe4VWJO35QRJCGhvXliNMb',
             root: '/image/',
             prefix: 'http://ghostrepo.qiniudn.com'
         }

        // or
        // 参考文档： http://www.ghostchina.com/qiniu-cdn-for-ghost/
        /*storage: {
            provider: 'qiniu',
            bucketname: 'your-bucket-name',
            ACCESS_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            SECRET_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            root: '/image/',
            prefix: 'http://your-bucket-name.qiniudn.com'
        }*/

        // or
        // 参考文档： http://www.ghostchina.com/upyun-cdn-for-ghost/ 
        /*storage: {
            provider: 'upyun',
            bucketname: 'your-bucket-name',
            username: 'your user name',
            password: 'your password',
            root: '/image/',
            prefix: 'http://your-bucket-name.b0.upaiyun.com'
        }*/

        // or
        // 参考文档： http://www.ghostchina.com/aliyun-oss-for-ghost/ 
        /*storage: {
            provider: 'oss',
            bucketname: 'your-bucket-name',
            ACCESS_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            SECRET_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            root: '/image/',
            prefix: 'http://your-bucket-name.oss-cn-hangzhou.aliyuncs.com'
        }*/

        // or
        // 参考文档： http://www.ghostchina.com/install-ghost-on-aliyun-ace/ 
        /*storage: {
            provider: 'ace-storage',
            bucketname: 'your-bucket-name'
        }*/
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blogs published URL.
        url: 'http://localhost:2368',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '80'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

// Export config
module.exports = config;
