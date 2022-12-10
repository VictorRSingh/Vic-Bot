const cheerio = require('cheerio');
const chalk = require('chalk');
const axios =  require('axios');
const pretty = require('pretty')

async function getPatchNotes(year, month) {

    var PatchNotes = [];

    //month = 10;

    let data = await axios.get(`https://overwatch.blizzard.com/en-us/news/patch-notes/live/${year}/${month}`)
        .then((res) =>{
            //console.log(res.data);
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });

        try {
            //load Data
            const $ = cheerio.load(data);
            //console.log(pretty($.html()));

            const patchNotes = $('.PatchNotes-body');

            const patches = $(patchNotes).find('.PatchNotes-patch');

            for(const patch of patches) {
                const p = {
                    anchor: '',
                    date: '',
                    title: '',
                    sections: {
                        generic: [],
                        hero: []
                    }
                }

                //Get Anchor
                const anchor = $(patch).find('.anchor');
                p.anchor = anchor.prop("id")


                //Get Date
                const date = $(patch).find('.PatchNotes-date');
                p.date = date.text();
                
                //Get Title
                const title = $(patch).find('.PatchNotes-patchTitle');
                p.title = title.text();

                const sections = $(patch).find('.PatchNotes-section');

                var i = 0;
                var j = 0;

                for(const section of sections) {
                    if (section.attribs.class == 'PatchNotes-section PatchNotes-section-generic_update' ) {
                        const g = {
                            sectionTitle: '',
                            sectionDescription: '',
                            sectionUpdates: []
                        }

                        //Get sectionTitle
                        const sectionTitle = $(section).find('.PatchNotes-sectionTitle');
                        g.sectionTitle = sectionTitle.text();

                        //Get sectionDescription
                        const sectionDescription = $(section).find('.PatchNotes-sectionDescription');
                        g.sectionDescription = sectionDescription.text();

                        const updates = $(section).find('.PatchNotesGeneralUpdate');
                        
                        //Get Updates
                        for(const update of updates) {
                            if(update.attribs.class == 'PatchNotesGeneralUpdate') {
                                const u = {
                                    updateTitle: '',
                                    updateDescription: ''
                                }

                                //Get updateTitle
                                const updateTitle = $(update).find('.PatchNotesGeneralUpdate-title');
                                u.updateTitle = updateTitle.text();

                                //Get updateDescription
                                const updateDescription = $(update).find('.PatchNotesGeneralUpdate-description');
                                u.updateDescription = updateDescription.text();

                                
                                g.sectionUpdates.push(u);
                            }
                        }

                        p.sections.generic.push(g);

                    } else if (section.attribs.class == 'PatchNotes-section PatchNotes-section-hero_update' ) {
                        const h = {
                            sectionTitle: '',
                            sectionUpdates: []
                        }

                        //Get sectionTitle
                        const sectionTitle = $(section).find('.PatchNotes-sectionTitle');
                        h.sectionTitle = sectionTitle.text();

                        const updates = $(section).find('.PatchNotesHeroUpdate');

                        //Get Updates
                        for(const update of updates) {

                            if(update.attribs.class == 'PatchNotesHeroUpdate') {
                                const hd = {
                                    hero: '',
                                    description: '',
                                    descriptionDev: '',
                                    abilities: []
                                }

                                //Get Hero
                                const hero = $(update).find('.PatchNotesHeroUpdate-name');
                                hd.hero = hero.text();
                                
                                //get Description
                                const description = $(update).find('.PatchNotesHeroUpdate-body p');
                                hd.description = description.text();

                                //get DescriptionDev
                                const dev = $(update).find('.PatchNotesHeroUpdate-dev p');
                                hd.descriptionDev = dev.text();

                                const abilities = $(update).find('.PatchNotesHeroUpdate-abilitiesList');

                                //TODO: get abilities names and their update descriptions.

                                h.sectionUpdates.push(hd);
                            }
                        }

                        p.sections.hero.push(h);
                    }

                }

                PatchNotes.push(p);
                console.log(JSON.stringify(PatchNotes, undefined, 4));
            }

        } catch (error) {
            console.log(error)
        }

    return PatchNotes;
};

module.exports.getPatchNotes = getPatchNotes;