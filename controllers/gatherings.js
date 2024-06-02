import Gathering from '../models/gathering.js';

export const list = async (req, res) => {
    try {
        const gatherings = await Gathering.find();
        res.render('gatherings/index', { gatherings });
    } catch (error) {
        res.status(500).send(error);
    }
};

export const show = async (req, res) => {
    try {
        const gathering = await Gathering.findById(req.params.id);
        res.render('gatherings/show', { gathering });
    } catch (error) {
        res.status(500).send(error);
    }
};

export const newForm = (req, res) => {
    res.render('gatherings/new');
};

export const create = async (req, res) => {
    try {
        const gathering = new Gathering(req.body);
        await gathering.save();
        res.redirect('/gatherings');
    } catch (error) {
        res.status(500).send(error);
    }
};

export const editForm = async (req, res) => {
    try {
        const gathering = await Gathering.findById(req.params.id);
        res.render('gatherings/edit', { gathering });
    } catch (error) {
        res.status(500).send(error);
    }
};

export const update = async (req, res) => {
    try {
        await Gathering.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/gatherings');
    } catch (error) {
        res.status(500).send(error);
    }
};

export const deleteGathering = async (req, res) => {
    try {
        await Gathering.findOneAndDelete(req.params.id);
        res.redirect('/gatherings');
    } catch (error) {
        res.status(500).send(error);
    }
};
