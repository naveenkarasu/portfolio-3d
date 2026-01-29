/**
 * ============================================================================
 * HOW TO ADD YOUR OWN PROJECT IMAGES
 * ============================================================================
 *
 * STEP 1: Prepare your screenshots
 *   - Take screenshots of your projects (1920x1080 recommended)
 *   - Save them as PNG or JPG files
 *   - Name them: project-name-1.png, project-name-2.png, etc.
 *
 * STEP 2: Place images in the correct folder
 *   - Copy your PNG/JPG files to: static/projects/images/
 *
 * STEP 3: Convert to KTX format
 *   - Install KTX-Software: https://github.com/KhronosGroup/KTX-Software
 *   - Run: npm run compress
 *   - This will generate .ktx files from your PNG/JPG files
 *
 * STEP 4: Update this file
 *   - Replace the placeholder images with your actual image filenames
 *   - Example: 'incident-response-1.ktx', 'incident-response-2.ktx'
 *
 * ALTERNATIVE (Manual KTX conversion):
 *   toktx --nowarn --2d --t2 --encode etc1s --qlevel 255 --assign_oetf srgb --target_type RGB output.ktx input.png
 *
 * RESOURCES:
 *   - https://github.khronos.org/KTX-Software/ktxtools/toktx.html
 *   - https://gltf-transform.dev/cli
 * ============================================================================
 */

export default [
    {
        title: 'Smart Incident Response Engine',
        titleSmall: [ 'Incident', 'Response' ],
        url: 'https://example.com/incident-response', // TODO: Replace with actual project URL
        attributes:
        {
            role: [ 'Backend Developer', 'Security Engineer' ],
            tech: [ 'Python', 'Kafka', 'Splunk' ]
        },
        distinctions: [],
        images:
        [
            // PLACEHOLDER: Using existing images. Replace with your own:
            // 'incident-response-1.ktx', 'incident-response-2.ktx', etc.
            'scout-1.ktx',
            'scout-2.ktx',
        ]
    },
    {
        title: 'Order Processing Platform',
        titleSmall: [ 'Order', 'Platform' ],
        url: 'https://example.com/order-platform', // TODO: Replace with actual project URL
        attributes:
        {
            role: [ 'Full Stack Developer' ],
            tech: [ 'Spring Boot', 'Kafka', 'MongoDB', 'AWS EKS' ]
        },
        distinctions: [],
        images:
        [
            'madbox-1.ktx',
            'madbox-2.ktx',
        ]
    },
    {
        title: 'Distributed LLM Training',
        titleSmall: [ 'LLM', 'Training' ],
        url: 'https://example.com/llm-training', // TODO: Replace with actual project URL
        attributes:
        {
            role: [ 'ML Engineer', 'Backend Developer' ],
            tech: [ 'PySpark', 'Docker', 'DistilBERT' ]
        },
        distinctions: [],
        images:
        [
            'luni-1.ktx',
            'luni-2.ktx',
        ]
    },
    {
        title: 'Weather Data Aggregator API',
        titleSmall: [ 'Weather', 'API' ],
        url: 'https://example.com/weather-api', // TODO: Replace with actual project URL
        attributes:
        {
            role: [ 'Backend Developer' ],
            tech: [ 'Node.js', 'MongoDB', 'Docker', 'Prometheus' ]
        },
        distinctions: [],
        images:
        [
            'prior-1.ktx',
            'prior-2.ktx',
        ]
    },
    {
        title: 'Secure Payments Gateway',
        titleSmall: [ 'Payments', 'Gateway' ],
        url: 'https://example.com/payments-gateway', // TODO: Replace with actual project URL
        attributes:
        {
            role: [ 'Backend Developer', 'Security Engineer' ],
            tech: [ 'Node.js', 'PostgreSQL', 'AWS ECS' ]
        },
        distinctions: [],
        images:
        [
            'orano-1.ktx',
            'orano-2.ktx',
        ]
    },
    {
        title: 'Mail Server Setup',
        titleSmall: [ 'Mail', 'Server' ],
        url: 'https://example.com/mail-server', // TODO: Replace with actual project URL
        attributes:
        {
            role: [ 'DevOps Engineer' ],
            tech: [ 'Mailcow', 'Digital Ocean', 'DNS' ]
        },
        distinctions: [],
        images:
        [
            'citrix-redbull-1.ktx',
            'citrix-redbull-2.ktx',
        ]
    },
    {
        title: 'Network Anomaly Detection',
        titleSmall: [ 'Anomaly', 'Detection' ],
        url: 'https://example.com/anomaly-detection', // TODO: Replace with actual project URL
        attributes:
        {
            role: [ 'Security Engineer', 'ML Engineer' ],
            tech: [ 'Python', 'Kafka', 'NLP' ]
        },
        distinctions: [],
        images:
        [
            'bonhomme-10-ans-1.ktx',
            'bonhomme-10-ans-2.ktx',
        ]
    },
    {
        title: 'Blood Donation WebApp',
        titleSmall: [ 'Blood', 'Donation' ],
        url: 'https://example.com/blood-donation', // TODO: Replace with actual project URL
        attributes:
        {
            role: [ 'Full Stack Developer' ],
            tech: [ '.NET', 'SQL Server' ]
        },
        distinctions: [],
        images:
        [
            'chartogne-taillet-1.ktx',
            'chartogne-taillet-2.ktx',
        ]
    }
]
