import { dictionary, locale, getLocaleFromNavigator , _ } from 'svelte-i18n';

function setupI18n() {
	dictionary.set({
		en: {
			id: 'en',
			header: {
				home: 'Home',
				donations: 'Donations',
				imprint: 'Imprint'
			},
			footer: {
				author: 'The author',
				project: 'The project on Github'
			},
            home: {
				title: 'Home'
			},
            donations: {
                title: 'Donations',
                details: 'Details',
                organization: 'Organization',
                amount: 'Amount',
                donation: 'Donation',
                homepage: 'Homepage',
                donateUrl: 'Donation page',
                donateAction: 'Donate here',
				backToOverview: 'Back to overview'
            },
			imprint: {
				title: 'Imprint'
			}
		},
		de: {
			id: 'de',
			header: {
				home: 'Start',
				donations: 'Spenden',
				imprint: 'Impressum'
			},
			footer: {
				author: 'Der Autor',
				project: 'Projekt auf Github'
			},
            home: {
				title: 'Start'
			},
            donations: {
                title: 'Spenden',
                details: 'Mehr lesen',
                organization: 'Organisation',
                amount: 'Betrag',
                donation: 'Spende',
                homepage: 'Webseite',
                donateUrl: 'Spendenseite',
                donateAction: 'Hier gehts zum Spenden',
				backToOverview: 'Zurück zur Übersicht'
            },
			imprint: {
				title: 'Impressum'
			}
		}
	});
	
	locale.set((getLocaleFromNavigator()) ? getLocaleFromNavigator() : 'en');
}
export { _, setupI18n };
