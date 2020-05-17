// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved
module.exports = {
    Docs: {
        About: [
            'intro',
        ],
        Tutorials: [
          'tutorials/intro',
          {
            type: 'category',
            label: 'Basic Tutorial',
            items: [
                'tutorials/basic/simple_cli',
                'tutorials/basic/config_file',
                'tutorials/basic/using_config',
                'tutorials/basic/strict_mode',
                'tutorials/basic/config_groups',
                'tutorials/basic/defaults',
                'tutorials/basic/composition',
                'tutorials/basic/tab_completion',
                {
                    type: 'category',
                    label: 'Running Hydra Applications',
                    items: [
                        'tutorials/basic/multi-run',
                        'tutorials/basic/working_directory',
                        'tutorials/basic/logging',
                        'tutorials/basic/debugging',
                    ]
                },

            ],
          },

          {
            type: 'category',
            label: 'Structured Configs Tutorial',
            items: [
                'tutorials/structured_config/intro',
                'tutorials/structured_config/minimal_example',
                'tutorials/structured_config/nesting',
                'tutorials/structured_config/config_groups',
                'tutorials/structured_config/defaults',
                'tutorials/structured_config/schema',
                'tutorials/structured_config/config_store',
            ],
          },
        ],

        'Common Patterns': [
            'patterns/objects',
            'patterns/specializing_config',
        ],

        'Configuring Hydra': [
            'configure_hydra/intro',
            'configure_hydra/job',
            'configure_hydra/logging',
            'configure_hydra/workdir',
            'configure_hydra/app_help',
        ],

        'Plugins': [
            'plugins/ax_sweeper',
            'plugins/colorlog',
            'plugins/joblib_launcher',
            'plugins/nevergrad_sweeper',
        ],

        'Advanced': [
            'advanced/package_header',
            'advanced/search_path',
            'advanced/plugins',
            'advanced/app_packaging',
        ],

        "Experimental": [
            "experimental/intro",
            'experimental/compose_api',
            'experimental/ray_example',
        ],

        'Development': [
            'development/contributing',
            'development/release',
        ],

        Upgrades: [
          {
            type: 'category',
            label: '0.11 to 1.0',
            items: [
                'upgrades/0.11_to_1.0/package_header',
            ],
          },
        ],
    }
}
