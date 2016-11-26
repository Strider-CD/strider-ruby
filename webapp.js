
module.exports = {
  config: {
    /* we don't support this yet
    runtime: {
      type: String,
      enum: ['2.6', '2.7', '3.3', 'whatever']
    },
    */
    gemPath: '/app/vendor/bundle/ruby/2.0.0',
    test: {
      type: String,
      enum: ['none', 'bundle exec rspec', 'bundle exec rake test'],
      default: 'bundle exec rspec'
    },
    prepare: {
      type: String,
      default: 'bundle install'
    }
  }
}
