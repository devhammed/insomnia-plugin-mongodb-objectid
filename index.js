module.exports.templateTags = [{
    name: 'mongo-object-id',
    displayName: 'Mongo ObjectId',
    description: 'Mongo ObjectId',
    args: [],
    async run (context) {
        return (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) => s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
    }
}];
