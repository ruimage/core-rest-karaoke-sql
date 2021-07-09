const express = require('express');
const {Entry} = require('../db/models');

const router = express.Router();


router.get('/all-the-entries', async (req, res, next) => {
  const entries = await Entry.findAll();
  return res.render('entries/index', { entries });
});

router.get('/new-entry-form', async (req, res, next) => {
  return res.render('entries/new');
});


router.post('/create-new-post', async (req, res, next) => {
  const entry = new Entry.create(req.body.entry);
  try {
    await entry.save();
    // throw Error('You shall not pass');
    return res.redirect(`show-one-entry/${entry.id}`);
  }
  catch (err) {
    return res.render('entries/new', { errors: [err] });
  }
});

router.get('/show-one-entry/:id', async (req, res, next) => {
  const entry = await Entry.findOne({where:{id:req.params.id}})
  return res.render('entries/show', { entry, dateCond: (entry.createdAt == entry.updatedAt) });
});

router.get('/edit-one-entry-form/:id', async (req, res, next) => {
  const entry = await Entry.findOne({where:{id:req.params.id}});
  return res.render('entries/edit', { entry });
});

router.post('/update-entry/:id', async (req, res, next) => {
  const entry = await Entry.findOne({where:{id:req.params.id}});
  const {singer, songTitle} = req.body.entry;
  entry.singer = singer;
  entry.songTitle = songTitle;
  entry.save();
  return res.redirect(`/show-one-entry/${entry.id}`);
});

router.get('/delete-entry/:id', async (req, res, next) => {
  await Entry.destroy({where:{id:req.params.id}});
  return res.redirect('/all-the-entries');
});

module.exports = router;