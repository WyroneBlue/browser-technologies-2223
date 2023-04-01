// Express Setup
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
import { saveProgress } from './middleware/checkProgress.js';

// BodyParser
const urlencodedParser = express.urlencoded({ extended: true });
app.use(urlencodedParser);
app.use(express.json());

// Routes
import routes from "./routes/index.js";

// HBS Setup
import { engine } from 'express-handlebars';

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        loop: function (min, max, block) {
            var accum = '';
            for (var i = min; i < max; ++i)
                accum += block.fn(i);
            return accum;
        },
        when: function (operand_1, operator, operand_2, options) {
            const operators = {
                'eq': function (l, r) { return l == r; },
                'noteq': function (l, r) { return l != r; },
                'gt': function (l, r) { return Number(l) > Number(r); },
                'or': function (l, r) { return l || r; },
                'and': function (l, r) { return l && r; },
                '%': function (l, r) { return (l % r) === 0; }
            }
            const result = operators[ operator ](operand_1, operand_2);

            if (result) return options.fn(this);
            else return options.inverse(this);
        }
    }
}));

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')))


// Use Routes
app.use('/', saveProgress, routes);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});