module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current', esmodules: false}}],
        '@babel/preset-typescript',
        '@babel/preset-react',
        '@babel/preset-flow',
    ],
    plugins: [
        ["@babel/plugin-transform-modules-commonjs"],
    ]
};
