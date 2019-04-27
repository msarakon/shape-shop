module.exports = {
    env: {
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    overrides: [
        {
            "files": ["*.vue"],
            "rules": {
                "no-unused-vars": ["error", {
                    "args": "none"
                }],
                "vue/html-indent": ["error", 4],
                "vue/max-attributes-per-line": ["error", {
                    "singleline": 3,
                    "multiline": {
                        "max": 1,
                        "allowFirstLine": true
                    }
                }]
            }
        }
    ]
};