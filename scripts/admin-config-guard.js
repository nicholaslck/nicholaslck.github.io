import fs from 'fs';
import yaml from 'js-yaml';

// Function to check local_backend value
const checkLocalBackend = () => {
	try {
		const file = fs.readFileSync('static/admin/config.yml', 'utf8');
		const doc = yaml.load(file);
		if (doc.local_backend === true) {
			console.error('Local backend is enabled');
			process.exit(1);
		} else {
			process.exit(0);
		}
	} catch (e) {
		console.error('Error reading YAML file:', e);
		process.exit(1);
	}
};

// Execute the function
checkLocalBackend();
