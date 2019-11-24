use v5.10;
use Data::Dumper;
use Language;

my $lang = Language->new(default_structure => 'sCVCf');
my @syllables = map { $lang->generate_syllable() } 1..10;
say join ' / ', @syllables;
say '-' x 70;
my $language = Language->new(
	default_structure => 'sCVCf',
	all_consonants => [qw(p t k m n l s)],
	all_vowels => [qw(a e i o u)],
	all_silibants => [qw(s)],
	all_finals => [qw(m n)],
);
my @syllables = map { $language->generate_syllable() } 1..10;
say join ' / ', @syllables;