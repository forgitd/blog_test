module.exports = {
	publicPath:'./',
	configureWebpack:{
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
				'plugins': '@/plugins',
			}
		}
	},
	
	devServer: {
		open: true,
		host: 'localhost',
		port: 8080,
		https: false,
		proxy: {
			'/api': {
				target: 'http://1.116.141.79:9090',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}