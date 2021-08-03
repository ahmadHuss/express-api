// Dependencies
import Sequelize from 'sequelize';
import slug from 'slug';

// Connecting to the database
let db = null;
if (process.env.NODE_ENV === 'production') {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  db = new Sequelize(process.env.DATABASE_URL);
}
// This will remove the extra response
const queryType = {
  type: Sequelize.QueryTypes.SELECT
};

// Defining our Post model...
const Post = db.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      // add a validation with a custom message when a field is empty
      notEmpty: {
        msg: 'The text is empty'
      }
    }
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'The slug is empty'
      }
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: {
        args: [0],
        msg: 'The rating should be 0 or greater than 0'
      },
      max: {
        args: [5],
        msg: 'The rating should be less than 5'
      }
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

// Find all posts...
export function findAllPosts(callback) {
  db.query('SELECT * FROM posts ORDER BY id ASC', queryType).then((data) => {
    callback(data);
  });
}

// Find a single post by slug...
export function findById(id, callback) {
  db.query(`SELECT * FROM posts WHERE id = '${id}'`, queryType).then((data) => {
    callback(data);
  });
}

// Creating new post...
export function createPost(text, rating, callback) {
  db.sync().then(() => {
    Post.create({
      text,
      slug: text ? slug(text, { lower: 'on' }) : '',
      rating: rating ? rating : 0
    })
      .then((insertedPost) => {
        console.log(insertedPost);
        callback(insertedPost.dataValues);
      })
      .catch((error) => {
        console.log(error);
        callback(false, error);
      });
  });
}

// Updating a post...
export function updatePost(id, text, rating, callback) {
  Post.update(
    {
      text,
      slug: text ? slug(text, { lower: 'on' }) : text,
      rating
    },
    {
      where: { id: id },
      returning: true
    }
  )
    .then((rowsUpdated) => {
      console.log('UPDATED', rowsUpdated);
      callback(rowsUpdated);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
}

// Removing a post...
export function removePost(id, callback) {
  Post.destroy({
    where: {
      id
    }
  })
    .then((rowDeleted) => {
      console.log('DELETED', rowDeleted);
      callback(rowDeleted);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
}
